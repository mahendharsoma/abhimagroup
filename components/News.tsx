"use client";

interface NewsCardProps {
  image: string;
  title: string;
  description: string;
  link: string;
}

function NewsCard({ image, title, description, link }: NewsCardProps) {
  return (
    <div className="news-card">
      <div className="news-card-image">
        <img src={image} alt={title} />
      </div>
      <div className="news-card-content">
        <h3>{title}</h3>
        <p>{description}</p>
        <a href={link} className="btn-read-more">
          Visit Site
        </a>
      </div>
    </div>
  );
}

export default function News() {
  const newsData = [
    {
      image: "/images/Abhima Technologies.jpeg",
      title: "Abhima Technologies",
      description:
        "Abhima Technologies delivers end-to-end IT solutions, specializing in software development, consulting, staffing, and project implementation. With expertise spanning EdTech, Telecom BSS/OSS, inventory, and fleet management, we empower businesses with innovation and efficiency",
      link: "https://abhimatechnologies.inrisoft.in/",
    },
    {
      image: "/images/Abhima Infratech.jpeg",
      title: "Abhima Infratech",
      description:
        "Abhima Infratech provides end-to-end IT consulting, outsourcing, and data-driven services that optimize business operations. From project implementation to back-office and front-office solutions, we empower organizations with efficiency and innovation.",
      link: "#",
    },
    {
      image: "/images/Abhima Projects.jpeg",
      title: "Abhima Projects",
      description:
        "Abhima Projects specializes in institutional and commercial buildings, housing developments, and complex infrastructure works. With expertise in earthworks, excavation, and large-scale structures like industrial plants, dams, and canal systems, we deliver projects built to last.",
      link: "#",
    },
    {
      image: "/images/Abhima Supplies.jpeg",
      title: "Abhima Supplies",
      description:
        "Abhima Supplies is a trusted partner in construction and real estate services, providing high‑quality materials and skilled contract labor. With a commitment to reliability and adaptability, we deliver resources that power ambitious projects and evolving business needs.",
      link: "#",
    },
    {
      image: "/images/SourceOn PCNS Projects.jpeg",
      title: "SourceOn PCNS Projects",
      description:
        "SourceOn PCNS Projects blends agricultural expertise with technology and infrastructure, delivering solutions in plantations, landscaping, material supply, and earthworks. By combining innovation and sustainability, we bring projects to life with precision and impact.",
      link: "#",
    },
  ];

  return (
    <section className="news-section" id="news">
      <div className="news-inner">
        {newsData.map((item, index) => (
          <NewsCard key={index} {...item} />
        ))}
      </div>
    </section>
  );
}
