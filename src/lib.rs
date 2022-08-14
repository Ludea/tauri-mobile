#[macro_use]
extern crate log;

use anyhow::Result;
#[cfg(target_os = "android")]
use wry::android_binding;

#[cfg(target_os = "android")]
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
}

fn stop_unwind<F: FnOnce() -> T, T>(f: F) -> T {
    match std::panic::catch_unwind(std::panic::AssertUnwindSafe(f)) {
        Ok(t) => t,
        Err(err) => {
            eprintln!("attempt to unwind out of `rust` with err: {:?}", err);
            std::process::abort()
        }
    }
}

fn _start_app() {
    stop_unwind(|| main().unwrap());
}

#[no_mangle]
#[inline(never)]
pub extern "C" fn start_app() {
    #[cfg(target_os = "android")]
    android_binding!(app_tauri, hello, _start_app);
    _start_app()
}

fn main() -> Result<()> {
    init_logging();
    tauri::Builder::default()
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
    Ok(())
}

