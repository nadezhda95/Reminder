function doPost(e) {
  const update = JSON.parse(e.postData.contents);
  let msg_data = {}
  if (update.hasOwnProperty('message')) {
    msg_data = {
      id         : update.message.message_id,
      chat_id    : update.message.chat.id,
      user_name  : update.message.from.username,
      first_name : update.message.from.first_name,
      text       : update.message.text,
      command    : update.message.text.split(" ")[0],
      date       : update.message.date/86400+25569.125,
      is_msg     : true
    } 
    if (update.message.hasOwnProperty('forward_from')) {
      msg_data.forward_user_name  = update.message.forward_from.username;
      msg_data.forward_first_name = update.message.forward_from.first_name;
      msg_data.is_forward         = true
 
    }
    if (update.message.hasOwnProperty('reply_to_message')) {
      msg_data.reply_id          = update.message.reply_to_message.message_id;
      msg_data.reply_text        = update.message.reply_to_message.text;
      msg_data.reply_date        = update.message.reply_to_message.date;
      msg_data.reply_user_name   = update.message.reply_to_message.from.username;
      msg_data.reply_first_name  = update.message.reply_to_message.from.first_name;
      msg_data.is_reply          =  true
    }
  }

  if (update.hasOwnProperty('edited_message')) {
    msg_data = {
      id         : update.edited_message.message_id,
      chat_id    : update.edited_message.chat.id,
      user_name  : update.edited_message.from.username,
      first_name : update.edited_message.from.first_name,
      text       : update.edited_message.text,
      command    : update.edited_message.text.split(" ")[0],
      date       : update.edited_message.date/86400+25569.125,
      is_edited  : true
    } 
  }

  if (update.hasOwnProperty('callback_query')) {
    msg_data = {
      id        : update.callback_query.message.message_id,
      chat_id   : update.callback_query.message.chat.id,
      user_name : update.callback_query.from.username,
      firstName : update.callback_query.from.first_name,
      text      : update.callback_query.message.text,
      command   : update.callback_query.message.text.split('\n')[0],
      date      : update.callback_query.message.date/86400+25569.125,
      vote      : update.callback_query.data,
      is_button : true
    }

  }

  bot_logic(msg_data);
}
