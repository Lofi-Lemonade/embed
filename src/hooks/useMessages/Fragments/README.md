**General message updates should be made in BaseSubscriptionMessage and UpdatedMessage**

Message objects can be received in 3 ways:
1. Messages/MoreMessages query
2. NewMessage subscription
3. MessageUpdated subscription

We also need to deal with:
1. Subscriptions do not include the correct author.color
2. UpdatedMessage does not include isGuest correctly
3. UpdatedMessage uses a different object type so we need to duplicate all the message data

Additionally, referencedMessage contains a nested message object, and we now need all message data to power reply expanding, so to avoid duplicating everything we need to pull stuff out into base fragments:

- BaseSubscriptionMessage contains the base message data
- BaseMessage adds author.color to BaseSubscriptionMessage

Final fragments:
- Message adds referencedMessage to BaseMessage
- SubscriptionMessage adds referencedMessage to BaseSubscriptionMessage
- UpdatedMessage is a copy of BaseSubscriptionMessage which removes isGuest and adds referencedMessage (which is also BaseSubscriptionMessage)
