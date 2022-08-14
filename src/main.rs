fn main() {
  #[cfg(not(any(target_os = "android", target_os = "ios")))] 
  hello::start_app() ;
} 
