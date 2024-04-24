export interface DataEmail {
    name: string;
    email: string;
    subject: string;
    message: string;
}

export interface CertificationCardProps {
    image: string;
    institution: string;
    date: string;
    imageClassName: string;
}

export interface ProjectCardProps {
    project: {
      title: string;
      description: string;
      imageUrl: string;
      url: string;
    };
    index: number;
    url2?: React.ReactNode;
}

export interface NavbarMenuItemData {
    id: number;
    label: string;
    href: string;
}

export interface IconSkill {
    img: string;
    title: string;
}