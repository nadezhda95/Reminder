function api_connector() {
  UrlFetchApp.fetch("https://api.telegram.org/bot"+API+"/setWebHook?url="+App_link); 
}