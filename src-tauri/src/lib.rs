/*#[cfg(target_os = "android")]
fn init_logging() {
  android_logger::init_once(
    android_logger::Config::default()
      .with_min_level(log::Level::Trace)
      .with_tag("hello"),
  );
}

#[cfg(not(target_os = "android"))]
fn init_logging() {
  env_logger::init();
}*/

#[tauri::mobile_entry_point]
fn main() {
  //init_logging();
  tauri::Builder::default()
    .run(tauri::generate_context!())
    .expect("error while running tauri application");
}
