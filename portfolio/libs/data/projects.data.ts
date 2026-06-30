export const PROJECTS_DATA = {
  "quan-ly-cua-hang": {
    slug: "quan-ly-cua-hang",
    title: "Hệ thống quản lý cửa hàng",
    subtitle: "Tối ưu hóa vận hành & Chuỗi cung ứng",
    meta: {
      role: "Lead Fullstack Engineer",
      timeline: "T10 2025 - T12 2025",
      client: "Giảng viên Đại Học"
    },
    links: {
      live: "https://example.com",
      source: "https://github.com/DBPCod/DotNET.git"
    },
    mainMockup: "/assets/img_projects/store_management/UI/img_store_management_1.jpg",
    assets: {
      architecture: [
        {
          id: "overview",
          title: "Sơ đồ kiến trúc tổng quan",
          image: "/assets/img_projects/store_management/System/kien_truc_he_thong.jpg"
        },
        {
          id: "database",
          title: "Sơ đồ ERD",
          image: "/assets/img_projects/store_management/System/erd.jpg"
        },
        {
          id: "workflow",
          title: "Sơ đồ luồng hoạt động",
          image: "/assets/img_projects/store_management/System/flow_thong_ke.jpg"
        }
      ]
    },
    screenshots: [
      "/assets/img_projects/store_management/UI/img_store_management_1.jpg",
      "/assets/img_projects/store_management/UI/img_store_management_2.jpg",
      "/assets/img_projects/store_management/UI/img_store_management_3.jpg",
      "/assets/img_projects/store_management/UI/img_store_management_4.jpg",
      "/assets/img_projects/store_management/UI/img_store_management_5.jpg",
      "/assets/img_projects/store_management/UI/img_store_management_6.jpg",
      "/assets/img_projects/store_management/UI/img_store_management_7.jpg",
      "/assets/img_projects/store_management/UI/img_store_management_8.jpg",
      "/assets/img_projects/store_management/UI/img_store_management_9.jpg",
      "/assets/img_projects/store_management/UI/img_store_management_10.jpg",
      "/assets/img_projects/store_management/UI/img_store_management_11.jpg",
      "/assets/img_projects/store_management/UI/img_store_management_12.jpg",
      "/assets/img_projects/store_management/UI/img_store_management_13.jpg",
      "/assets/img_projects/store_management/UI/img_store_management_14.jpg",
      "/assets/img_projects/store_management/UI/img_store_management_15.jpg",
      "/assets/img_projects/store_management/UI/img_store_management_16.jpg",
      "/assets/img_projects/store_management/UI/img_store_management_17.jpg",
      "/assets/img_projects/store_management/UI/img_store_management_18.jpg",
      "/assets/img_projects/store_management/UI/img_store_management_19.jpg",
      "/assets/img_projects/store_management/UI/img_store_management_20.jpg",
      "/assets/img_projects/store_management/UI/img_store_management_21.jpg",
      "/assets/img_projects/store_management/UI/img_store_management_22.jpg",
    ],

    overview: {
      challenge: {
        title: "Bài toán & Thách thức",
        points: [
          "Hệ thống cũ rời rạc; dữ liệu kho, sản phẩm và hóa đơn không đồng bộ thời gian thực, gây sai lệch tồn kho và thất thoát doanh thu.",
          "Cơ chế phân quyền giữa nhân viên và quản lý thiếu chặt chẽ, thiếu xác thực an toàn.",
          "Hệ thống chậm và giảm sút hiệu năng rõ rệt khi số lượng sản phẩm (>50 mặt hàng) và lượng giao dịch tăng cao.",
          "Quy trình thanh toán và xử lý đơn tại quầy tốn thời gian, giảm tốc độ phục vụ khách hàng."
        ]
      },
      solution: {
        title: "Giải pháp Kỹ thuật",
        points: [
          "Tách biệt Frontend - Backend; áp dụng mô hình Service-Repository và DTO Pattern để tối ưu hóa, bảo mật luồng dữ liệu.",
          "Xây dựng RESTful API bằng ASP.NET Core (.NET 9.0) kết hợp Pomelo EF Core truy vấn MySQL ổn định.",
          "Phát triển ứng dụng Single Page Application (SPA) chạy trực tiếp phía Client bằng Blazor WebAssembly (WASM).",
          "Tích hợp Redis Caching cho dữ liệu tần suất cao; triển khai bảo mật đa lớp với JWT và xác thực OTP qua SMTP."
        ]
      },
      result: {
        title: "Kết quả Thực tế",
        description: "Hệ thống mới đã cải thiện đáng kể hiệu suất vận hành và giảm thiểu chi phí bảo trì.",
        metrics: [
          { label: "Thời gian quản lý kho & xử lý đơn hàng.", value: "- 40%" },
          { label: "Độ chính xác trong thống kê doanh thu.", value: "99.9%" }
        ]
      }
    },
    technologies: {
      frontend: [".NET 9", "Blazor WebAssembly", "Tailwind CSS"],
      backend: ["ASP.NET Core Web API", "Entity Framework Core", "MySQL", "Redis", "JWT Authentication", "Google OAuth"],
      // devops: ["AWS", "Docker", "Kubernetes", "GitHub Actions"]
    },
    architectureSlides: [
      {
        id: 1,
        title: "Architecture Diagram",
        description: "System topology detailing microservices interaction, message queues, and database clusters goes here.",
        image: "/images/architecture/erp-topology.png"
      },
      {
        id: 2,
        title: "Database Schema",
        description: "Optimized relational database structure designed for high-concurrency read/write operations.",
        image: "/images/architecture/erp-db.png"
      }
    ]
  },
  "nen-tang-fintech-core": {
    slug: "nen-tang-fintech-core",
    title: "Nền tảng Fintech Core",
    subtitle: "Bảo mật và hiệu năng cho giải pháp tài chính",
    meta: {
      role: "Senior Backend Engineer",
      timeline: "Q1 2021 - Q4 2021",
      client: "FinServe Inc"
    },
    links: {
      live: "https://example-fintech.com",
      source: "https://github.com/your-repo/fintech"
    },
    mainMockup: "/images/mockups/fintech-main.png",
    assets: {
      architecture: [
        {
          id: "overview",
          title: "Sơ đồ kiến trúc tổng quan",
          image: "/images/projects/fintech/architecture/overview.png"
        },
        {
          id: "database",
          title: "Sơ đồ ERD",
          image: "/images/projects/fintech/architecture/erd.png"
        },
        {
          id: "workflow",
          title: "Sơ đồ luồng hoạt động",
          image: "/images/projects/fintech/architecture/workflow.png"
        }
      ]
    },
    screenshots: [
      "/images/demo-1.jpg",
      "/images/demo-2.jpg",
      "/images/demo-3.jpg"
    ],
    overview: {
      challenge: {
        title: "Bài toán & Thách thức",
        points: [
          "Yêu cầu độ trễ thấp cho hàng nghìn giao dịch mỗi giây.",
          "Quy định bảo mật và lưu trữ dữ liệu nghiêm ngặt.",
          "Khả năng mở rộng ngang khi lưu lượng tăng đột biến."
        ]
      },
      solution: {
        title: "Giải pháp Kỹ thuật",
        points: [
          "Thiết kế hệ thống event-driven, chia nhỏ các service theo bounded-context.",
          "Sử dụng caching và CQRS để tăng hiệu năng đọc/ghi.",
          "Áp dụng kĩ thuật rate-limiting và monitoring chặt chẽ." 
        ]
      },
      result: {
        title: "Kết quả Thực tế",
        description: "Hệ thống đáp ứng thông lượng cao và tuân thủ tiêu chuẩn bảo mật.",
        metrics: [
          { label: "TỐC ĐỘ XỬ LÝ", value: ">2000 TPS" },
          { label: "THỜI GIAN PHẢN HỒI TRUNG BÌNH", value: "<120ms" }
        ]
      }
    },
    technologies: {
      frontend: ["React", "TypeScript"],
      backend: ["Golang", "PostgreSQL", "Redis"],
      devops: ["GCP", "Docker", "Terraform"]
    },
    architectureSlides: []
  }
};
