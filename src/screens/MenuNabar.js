import React from "react";

const MenuNabar = () => {
  return (
    <div>
      <div className="menu_nabar">
        <div className="menu_item">
          <div className="menu_item_icon size_icon">
            <i class="fa-solid fa-house "></i>
          </div>
          <div className="menu_item_text">Trang chủ</div>
        </div>
        <div className="menu_item">
          <div className="menu_item_icon size_icon">
            <i class="fa-regular fa-compass"></i>
          </div>
          <div className="menu_item_text">Khám phá</div>
        </div>
        <div className="menu_item">
          <div className="menu_item_icon size_icon">
            <i class="fa-brands fa-tiktok"></i>
          </div>
          <div className="menu_item_text">Shots</div>
        </div>
        <div className="menu_item">
          <div className="menu_item_icon size_icon">
            <i class="fa-solid fa-book-bookmark"></i>
          </div>
          <div className="menu_item_text">Kênh đăng ký</div>
        </div>
      </div>
      <div className="menu_nabar">
        <div className="menu_item">
          <div className="menu_item_icon size_icon">
            <i class="fa-solid fa-film"></i>
          </div>
          <div className="menu_item_text">Thư viện</div>
        </div>
        <div className="menu_item">
          <div className="menu_item_icon size_icon">
            <i class="fa-solid fa-photo-film"></i>
          </div>
          <div className="menu_item_text">Video đã xem</div>
        </div>
        <div className="menu_item">
          <div className="menu_item_icon size_icon">
            <i class="fa-regular fa-file-video"></i>
          </div>
          <div className="menu_item_text">Video của bạn</div>
        </div>
        <div className="menu_item">
          <div className="menu_item_icon size_icon">
            <i class="fa-regular fa-clock"></i>
          </div>
          <div className="menu_item_text">Xem sau</div>
        </div>
        <div className="menu_item">
          <div className="menu_item_icon size_icon">
            <i class="fa-regular fa-thumbs-up"></i>
          </div>
          <div className="menu_item_text">video đã thích</div>
        </div>
        <div className="menu_item">
          <div className="menu_item_icon size_icon">
            <i class="fa-regular fa-circle-play"></i>
          </div>
          <div className="menu_item_text">Tổng hợp</div>
        </div>
        <div className="menu_item">
          <div className="menu_item_icon size_icon">
            <i class="fa-solid fa-angle-up"></i>
          </div>
          <div className="menu_item_text">Ẩn bớt</div>
        </div>
      </div>
    </div>
  );
};

export default MenuNabar;
