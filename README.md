# wall

```shell
cargo tauri build # 打包桌面应用
cargo tauri android build # 打包安卓应用
cargo tauri ios build # 打包 IOS 应用
```


tauri 打包的安卓应用，状态栏背景色与应用背景色不一致，修改 themes.xml 文件
```xml
<resources xmlns:tools="http://schemas.android.com/tools">
    <!-- Base application theme. -->
    <style name="Theme.app" parent="Theme.MaterialComponents.DayNight.NoActionBar">
        <!-- 设置状态栏背景色 -->
        <item name="android:statusBarColor">#fff5f7</item>  <!-- 这里换成你想要的背景色 -->
        <!-- 状态栏图标设为深色，适合浅色背景 -->
        <item name="android:windowLightStatusBar">true</item>
    </style>
</resources>
```
