const router = require("express").Router();
const { Op } = require("sequelize");
const { Conversation, Message } = require("../../db/models");
const onlineUsers = require("../../onlineUsers");

// expects {recipientId, text, conversationId } in body (conversationId will be null if no conversation exists yet)
router.post("/", async (req, res, next) => {
  try {
    if (!req.user) {
      return res.sendStatus(401);
    }
    const senderId = req.user.id;
    const { recipientId, text, sender } = req.body;

    // if we don't have conversation id, find a conversation to make sure it doesn't already exist
    let conversation = await Conversation.findConversation(
      senderId,
      recipientId
    );

    if (!conversation) {
      // create conversation
      conversation = await Conversation.create({
        user1Id: senderId,
        user2Id: recipientId,
      });
      if (onlineUsers[sender.id]) {
        sender.online = true;
      }
    }
    const message = await Message.create({
      senderId,
      text,
      conversationId: conversation.id,
    });
    res.json({ message, sender });
  } catch (error) {
    next(error);
  }
});

router.put("/", async (req, res, next) => {

  try {
    if (!req.user) {
      return res.sendStatus(401);
    }
    const { conversationId } = req.body;

    let messages = await Message.findAll({
      where: {
        status: "unread",
        conversationId,
        [Op.not]: {
          senderId: req.user.id
        }
      }
    });
    messages.forEach((message) => {
      message.update({ status: "read" })
    })
    res.json({ messages })
  } catch (error) {
    next(error)
  }
});


module.exports = router;
