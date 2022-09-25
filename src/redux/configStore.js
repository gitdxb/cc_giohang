// Store: nơi chứa các giá trị cần đổi (state)
import { combineReducers, createStore } from "redux";

// reducer là state lưu trên store redux
// rootReducer: chứa tất cả các state

// khai báo giá trị mặc định cho state
const giohang = [
    {
        maSP: 1,
        tenSP: "VinSmart Live",
        manHinh: "AMOLED, 6.2, Full HD+",
        heDieuHanh: "Android 9.0 (Pie)",
        cameraTruoc: "20 MP",
        cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
        ram: "4 GB",
        rom: "64 GB",
        giaBan: 5700000,
        hinhAnh: "./img/phone/vsphone.jpg",
        soLuong: 1
    }
]
const rootReducer = combineReducers({
    // khai báo và lưu trữ các state của ứng dụng
    // reducer là 1 hàm trả về state
    gioHangReducer: (state = giohang, action) => { 
        console.log(action);
        return state;
     }
})

export const store = createStore(rootReducer);