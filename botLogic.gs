function bot_logic(msg_data) {
  if (msg_data.command == "/all") {
    send_all_events(msg_data);
  }
}
