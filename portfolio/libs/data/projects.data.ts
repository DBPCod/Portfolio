export const PROJECTS_DATA = {
  "he-thong-erp-doanh-nghiep": {
    slug: "he-thong-erp-doanh-nghiep",
    title: "Hệ thống ERP Doanh nghiệp",
    subtitle: "Tối ưu hóa vận hành & Chuỗi cung ứng",
    meta: {
      role: "Lead Fullstack Engineer",
      timeline: "Q3 2022 - Q2 2023",
      client: "TechLogistics Corp"
    },
    links: {
      live: "https://example.com",
      source: "https://github.com/your-repo"
    },
    mainMockup: "/images/mockups/erp-main.png",
    assets: {
      architecture: [
        {
          id: "overview",
          title: "Sơ đồ kiến trúc tổng quan",
          image: "/images/projects/erp/architecture/overview.png"
        },
        {
          id: "database",
          title: "Sơ đồ ERD",
          image: "/images/projects/erp/architecture/erd.png"
        },
        {
          id: "workflow",
          title: "Sơ đồ luồng hoạt động",
          image: "/images/projects/erp/architecture/workflow.png"
        }
      ]
    },
    screenshots: [
      "/images/demo-1.jpg",
      "/images/demo-1.jpg",
      "/images/demo-1.jpg"
    ],
    overview: {
      challenge: {
        title: "Bài toán & Thách thức",
        points: [
          "Hệ thống cũ phân mảnh, dữ liệu không đồng bộ giữa các phòng ban dẫn đến sai sót trong quản lý kho và làm chậm quá trình xử lý đơn hàng.",
          "Độ trễ đồng bộ dữ liệu > 2 giờ.",
          "Thiếu khả năng mở rộng khi khối lượng giao dịch tăng.",
          "UX phức tạp, tốn thời gian đào tạo nhân sự mới."
        ]
      },
      solution: {
        title: "Giải pháp Kỹ thuật",
        points: [
          "Tái cấu trúc kiến trúc sang Microservices, sử dụng Event-Driven Architecture để đảm bảo tính nhất quán của dữ liệu theo thời gian thực.",
          "Chuyển đổi Monolith sang Microservices.",
          "Triển khai Kafka cho streaming data.",
          "Xây dựng Design System mới bằng React & Tailwind."
        ]
      },
      result: {
        title: "Kết quả Thực tế",
        description: "Hệ thống mới đã cải thiện đáng kể hiệu suất vận hành và giảm thiểu chi phí bảo trì.",
        metrics: [
          { label: "THỜI GIAN XỬ LÝ ĐƠN", value: "- 45%" },
          { label: "UPTIME HỆ THỐNG", value: "99.9%" }
        ]
      }
    },
    technologies: {
      frontend: ["React 19", "TypeScript", "Tailwind CSS", "Zustand"],
      backend: ["Node.js", "NestJS", "PostgreSQL", "Redis"],
      devops: ["AWS", "Docker", "Kubernetes", "GitHub Actions"]
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
