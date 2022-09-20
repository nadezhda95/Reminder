function bot_logic(msg_data) {
  if (msg_data.chat_id == chat_id_root) {
    if (msg_data.command == "/all") {
      send_all_events();
    }
  } else {
    send('Нет прав(',msg_data.chat_id,API)
  }
}
