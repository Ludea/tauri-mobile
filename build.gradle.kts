plugins {
    id("com.android.application")
    id("org.jetbrains.kotlin.android")
    id("rustPlugin")
}

android {
    compileSdk = 33
    defaultConfig {
        manifestPlaceholders["usesCleartextTraffic"] = "false"
        applicationId = "com.ludea.hello"
        minSdk = 24
        targetSdk = 33
        versionCode = 1
        versionName = "1.0"
    }
    sourceSets.getByName("main") {
        // Vulkan validation layers
        val ndkHome = System.getenv("NDK_HOME")
        jniLibs.srcDir("${ndkHome}/sources/third_party/vulkan/src/build-android/jniLibs")
    }
    buildTypes {
        getByName("debug") {
            manifestPlaceholders["usesCleartextTraffic"] = "true"
            isDebuggable = true
            isJniDebuggable = true
            isMinifyEnabled = false
            packagingOptions {
                jniLibs.keepDebugSymbols.add("*/arm64-v8a/*.so")
17m 52s ago
2s
1s
19s
1s
1s
4m 36s
39s
11s
47s
1s
0s
Run ls src-tauri/gen/android/hello/app
build.gradle.kts
proguard-rules.pro
src
plugins {
    id("com.android.application")
    id("org.jetbrains.kotlin.android")
    id("rustPlugin")
}

android {
    compileSdk = 33
    defaultConfig {
        manifestPlaceholders["usesCleartextTraffic"] = "false"
        applicationId = "com.ludea.hello"
        minSdk = 24
        targetSdk = 33
        versionCode = 1
        versionName = "1.0"
    }
    sourceSets.getByName("main") {
        // Vulkan validation layers
        val ndkHome = System.getenv("NDK_HOME")
        jniLibs.srcDir("${ndkHome}/sources/third_party/vulkan/src/build-android/jniLibs")
    }
    buildTypes {
        getByName("debug") {
            manifestPlaceholders["usesCleartextTraffic"] = "true"
            isDebuggable = true
            isJniDebuggable = true
            isMinifyEnabled = false
            packagingOptions {
                jniLibs.keepDebugSymbols.add("*/arm64-v8a/*.so")

                jniLibs.keepDebugSymbols.add("*/armeabi-v7a/*.so")

                jniLibs.keepDebugSymbols.add("*/x86/*.so")

                jniLibs.keepDebugSymbols.add("*/x86_64/*.so")
            }
        }
        getByName("release") {
            isMinifyEnabled = false
            proguardFiles(getDefaultProguardFile("proguard-android.txt"), "proguard-rules.pro")
        }
    }
    flavorDimensions.add("abi")
    productFlavors {
        create("universal") {
            val abiList = findProperty("abiList") as? String

            dimension = "abi"
            ndk {
                abiFilters += abiList?.split(",")?.map { it.trim() } ?: listOf(                    "arm64-v8a",                    "armeabi-v7a",                    "x86",                    "x86_64",
                )
            }
        }
        create("arm64") {
            dimension = "abi"
            ndk {
                abiFilters += listOf("arm64-v8a")
            }
        }
