import {settingsStore} from "@store";
import {store} from "@models";
import {
  Close,
  Description,
  Experiment, ExperimentCheckbox, ExperimentDescription,
  Root, Title, Top
} from "@ui/Modal/screens/Experiments/elements";

const Experiments = () => (
  <Root className="settings-modal">
    <Top className="top">
      <Title>Experiments</Title>
      <Close
        onClick={() => {
          store.modal.close();
          store.modal.openSettings();
        }}
      />
    </Top>
    <Description>The following options may be unstable. If you come across any bugs with them, we'd love for you to come tell us!</Description>
    <Experiment>
      <ExperimentCheckbox className="send-button-setting checkbox-field">
        <input
          type="checkbox"
          defaultChecked={settingsStore.messageViewRewriteEnabled}
          onChange={e => settingsStore.setMessageViewRewriteEnabled(e.target.checked)}
        />
        <span className="checkbox">
          <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24">
            <path fill="currentColor" fillRule="evenodd" clipRule="evenodd" d="M8.99991 16.17L4.82991 12L3.40991 13.41L8.99991 19L20.9999 7.00003L19.5899 5.59003L8.99991 16.17Z" />
          </svg>
        </span>
        <span className="checkbox-text">Message view rewrite</span>
      </ExperimentCheckbox>
      <ExperimentDescription>
        This experiment, when enabled, will replace the old message scroller with a new & improved one.
        It should hopefully fix the jumping around when loading new messages.
      </ExperimentDescription>
    </Experiment>
  </Root>
);

export default Experiments;
