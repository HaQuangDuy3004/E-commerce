# 🛒 E-commerce App

## 📖 Giới thiệu

Ứng dụng thương mại điện tử di động cho phép người dùng đăng bán, xem và tìm kiếm sản phẩm theo danh mục. Được xây dựng với React Native, Expo, Firebase và NativeWind (Tailwind CSS cho React Native).

## 🚀 Tính năng

- Xem danh sách sản phẩm mới nhất
- Lọc sản phẩm theo danh mục
- Xem chi tiết sản phẩm
- Đăng bài bán sản phẩm mới (có upload ảnh lên Firebase Storage)
- Giao diện hiện đại, responsive với NativeWind
- Tích hợp Firebase Firestore và Storage

## 📁 Cấu trúc thư mục

- `Apps/Components/`: Các component giao diện (Header, Slider, Categories, v.v.)
- `Apps/Screens/`: Các màn hình chính (Home, Explore, Add Post, Profile, v.v.)
- `Apps/Navigation/`: Điều hướng Stack và Tab
- `Apps/Store/`, `Apps/Redux/`: (Dự phòng) Quản lý state với Redux
- `Data/`: Dữ liệu mẫu cho Category, Sliders, UserPost
- `assets/`: Hình ảnh, icon, splash screen
- `firebaseConfig.jsx`: Cấu hình Firebase

## Cài đặt

1. **Clone project**
    ```sh
    git clone <repo-url>
    cd E-commerce-main
    ```

2. **Cài đặt dependencies**
    ```sh
    npm install
    ```

3. **Chạy ứng dụng**
    ```sh
    npm start
    ```
    hoặc dùng Expo Go để quét QR code.

## Công nghệ sử dụng

- [React Native](https://reactnative.dev/)
- [Expo](https://expo.dev/)
- [Firebase (Firestore, Storage)](https://firebase.google.com/)
- [NativeWind (Tailwind CSS)](https://www.nativewind.dev/)
- [Formik](https://formik.org/) (quản lý form)
- [React Navigation](https://reactnavigation.org/)

## Hướng dẫn sử dụng

- Đăng nhập (mặc định là Admin demo)
- Xem các sản phẩm mới nhất trên trang chủ
- Chọn danh mục để lọc sản phẩm
- Nhấn vào sản phẩm để xem chi tiết
- Vào tab "Add Post" để đăng bán sản phẩm mới (có thể chọn ảnh từ thư viện)
- Vào tab "Profile" để xem thông tin tài khoản

## Đóng góp

Mọi đóng góp vui lòng tạo pull request hoặc issue mới.

## License

MIT

---

> Project by GroupSix
