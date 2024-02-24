import * as React from "react";

import { Root, Textarea, NoPerms, UploadButton, SendButton, SendButtonContainer } from "./elements";
import Suggestions from "./Suggestions";
import Channels from "./suggestions/channels";
import Commands from "./suggestions/commands";
import Emojis from "./suggestions/emojis";
import Mentions from "./suggestions/mentions";
import extractQuery from "./utils/extractQuery";
import injectValue from "./utils/injectValue";
import { ChatProps } from "../Chat";
import { inject, observer } from "mobx-react";
import { generalStore, authStore, settingsStore } from "@store";
import { login } from "@views/Messages/Header";
import { Locale } from "@lib/Locale";
import { store } from "@models";
import EmojiButton from "./EmojiButton";
import Spinner from 'react-spinkit'
import Loadable from 'react-loadable'

interface Props extends ChatProps {
  innerRef?: (textarea: HTMLTextAreaElement) => void,
  innerProps?: React.InputHTMLAttributes<HTMLTextAreaElement>,
  onChange?: Function,
  onKeyPress?: Function,
  onSubmit?: Function,
  channel?: any
}

const EmojiPicker = Loadable({
  loader: () =>
    import('./EmojiPicker'),
  loading: props =>
    props.pastDelay ? <Spinner name="ball-clip-rotate-multiple" /> : null
})

export const handlers = [Emojis, Mentions, Commands, Channels];

@observer
class MagicTextarea extends React.Component<Props> {
  initialState = {
    leftIndex: -1,
    caretPosition: -1,

    showSuggestions: false,
    showEmojiPicker: false,

    handler: null,

    query: null
  };

  state = this.initialState;
  resetState = () => this.setState(this.initialState);

  getValue = () => this.textarea.value;
  textarea: HTMLTextAreaElement;
  suggestions: Suggestions;
  emojiButton: HTMLButtonElement;

  onChange(value) {
    const { onChange } = this.props;

    onChange?.(value);
  }

  upload = (file: File) => {
    generalStore.setFile(file)
    store.modal.openUpload(this.props.channel.name, this.props.thread, this.textarea.value)
    this.textarea.value = ''
    this.forceUpdate()
  }

  submit = (event: React.SyntheticEvent) => {
    const { onSubmit, onChange } = this.props;

    // Submit
    onSubmit?.(this.textarea.value);
    onChange?.("");
    event.preventDefault();
    this.forceUpdate(); // reset send button
  }

  render() {
    const user = authStore.user;

    if (!(user && this.props.channel.canSend)) return (
      <NoPerms onClick={login} clickable={!user}>
        { !user ? Locale.translate('input.login') : Locale.translate('input.noperms') }
      </NoPerms>
    );

    if (this.props.thread && (generalStore.activeThread?.locked || generalStore.activeThread?.archivedAt)) return (
      <NoPerms>
        { generalStore.activeThread.locked ? Locale.translate('input.threadlocked') : Locale.translate('input.threadarchived') }
      </NoPerms>
    );

    return (
      <Root>
        {generalStore.settings?.filesEnabled ?
          <UploadButton className="upload-button">
            <input
              type="file"
              onChange={event => {
                if (!event.target.files[0]) return
                this.upload(event.target.files[0])
                event.target.value = null
              }}
              hidden
            />
            <svg width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2.00098C6.486 2.00098 2 6.48698 2 12.001C2 17.515 6.486 22.001 12 22.001C17.514 22.001 22 17.515 22 12.001C22 6.48698 17.514 2.00098 12 2.00098ZM17 13.001H13V17.001H11V13.001H7V11.001H11V7.00098H13V11.001H17V13.001Z"></path></svg>
          </UploadButton>
        : null}
        <Textarea
          {...this.props.innerProps}
          upload={generalStore.settings?.filesEnabled}
          innerRef={ref => {
            const { innerRef } = this.props;

            this.textarea = ref;
            innerRef?.(ref);
          }}
          onChange={event => this.onChange(event.target.value)}
          onClick={this.resetState}
          onPaste={event => {
            if (!event.clipboardData.files[0] || !generalStore.settings?.filesEnabled) return
            event.preventDefault()
            this.upload(event.clipboardData.files[0])
          }}
          onKeyDown={event => {
            switch (event.key) {
              case "ArrowUp":
              case "ArrowDown":
                if (!this.suggestions) return;

                this.suggestions.traverseSuggestions(event.key === "ArrowDown");
                event.preventDefault();
                return;
              case "Tab":
                if (!this.suggestions) return;

                this.suggestions.selectSuggestion();
                event.preventDefault();
                return;
              case "Enter":
                if (this.state.showSuggestions) {
                  this.suggestions?.selectSuggestion();
                  event.preventDefault();
                  return;
                }

                if (!event.shiftKey || window.innerWidth < 768) {
                  this.submit(event)
                }

                return;
              case "Escape":
                this.resetState();
                break;
              default:
                if (this.props.onKeyPress) this.props.onKeyPress(event);
                break;
            }
          }}
          onInput={() => {
            const { query, ...rest } = extractQuery(this.textarea);
            this.setState({ ...rest, showSuggestions: false });

            // Find a parser for the selected query
            for (const handler of handlers) {
              const parsedQuery = handler.extract(query, this.textarea);

              if (typeof parsedQuery === "string") {
                this.setState({
                  showSuggestions: true,
                  query: parsedQuery,
                  handler
                });
                break;
              }
            }
          }}
        />

        <EmojiButton
          pickerIsOpen={this.state.showEmojiPicker}
          setPickerState={state => this.setState({ showEmojiPicker: state })}
          setElement={element => this.emojiButton = element}
        />

        {(settingsStore.sendButton || generalStore.accessibility?.has('forceSendButton')) && <SendButtonContainer className="send-button-container">
          <SendButton onClick={this.submit} disabled={!this.textarea || this.textarea.value.length === 0} className="send-button">
            <svg width="20" height="20" viewBox="0 0 16 16"><path d="M8.2738 8.49222L1.99997 9.09877L0.349029 14.3788C0.250591 14.691 0.347154 15.0322 0.595581 15.246C0.843069 15.4597 1.19464 15.5047 1.48903 15.3613L15.2384 8.7032C15.5075 8.57195 15.6781 8.29914 15.6781 8.00007C15.6781 7.70101 15.5074 7.4282 15.2384 7.29694L1.49839 0.634063C1.20401 0.490625 0.852453 0.535625 0.604941 0.749376C0.356493 0.963128 0.259941 1.30344 0.358389 1.61563L2.00932 6.89563L8.27093 7.50312C8.52405 7.52843 8.71718 7.74125 8.71718 7.99531C8.71718 8.24938 8.52406 8.46218 8.27093 8.4875L8.2738 8.49222Z" fill="currentColor"></path></svg>
          </SendButton>
        </SendButtonContainer>}

        {this.state.showEmojiPicker && (
          <EmojiPicker
            button={this.emojiButton}
            close={() => this.setState({ showEmojiPicker: false })}
            onSelect={emoji => {
              const text = `${this.textarea.value}${emoji} `;
              this.textarea.value = text;

              this.textarea.focus();
              this.textarea.setSelectionRange(text.length, text.length)

              this.setState({ showEmojiPicker: false })
              this.onChange(text);
            }}
          />
        )}

        {this.state.showSuggestions && (
          <Suggestions
            ref={ref => (this.suggestions = ref)}
            query={this.state.query}
            handler={this.state.handler}
            onSelect={suggestion => {
              const { handler, leftIndex, caretPosition } = this.state;

              if (suggestion) {
                const text = injectValue({
                  input: this.textarea,
                  value: handler.toString(suggestion),
                  leftIndex,
                  caretPosition
                });

                this.onChange(text);
              }

              this.resetState();
            }}
          />
        )}
      </Root>
    );
  }
}

export default MagicTextarea;
