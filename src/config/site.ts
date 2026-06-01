export type HomeItem = {
  label: string;
  href?: string;
  linkLabel?: string;
  external?: boolean;
  prefix?: string;
};

export type HomeSection = {
  title: string;
  items?: HomeItem[];
  volumes?: {
    include?: number[];
    exclude?: number[];
    sort?: "asc" | "desc";
    showEmpty?: boolean;
  };
};

export type SiteConfig = {
  name: string;
  description: string;
  homeAsciiArt: string;
  homeSections: HomeSection[];
};

export const siteConfig: SiteConfig = {
  name: "Masere",
  description: "Security Research Philes",
  homeAsciiArt: `
███╗   ███╗ █████╗ ███████╗███████╗██████╗ ███████╗
████╗ ████║██╔══██╗██╔════╝██╔════╝██╔══██╗██╔════╝
██╔████╔██║███████║███████╗█████╗  ██████╔╝█████╗  
██║╚██╔╝██║██╔══██║╚════██║██╔══╝  ██╔══██╗██╔══╝  
██║ ╚═╝ ██║██║  ██║███████║███████╗██║  ██║███████╗
╚═╝     ╚═╝╚═╝  ╚═╝╚══════╝╚══════╝╚═╝  ╚═╝╚══════╝
▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓
▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒
░░░ ░░░ ░░ ░░░ ░░░ ░░ ░░░ ░░░ ░░ ░░░ ░░░ ░░ ░░░ ░░░
 ░   ░      ░   ░      ░   ░      ░   ░      ░   ░ 
  `,
  homeSections: [
    {
      title: "Introduction",
      items: [
        {
          label:
            "Hello, I’m Raihan Masere, a Geology student at Universitas AKPRIND Indonesia. I have a strong interest in the mysteries of the Earth and the natural processes that shape our planet. I believe that understanding geology is not only important for science but also essential for creating sustainable solutions for the environment and society.",
        },
      ],
    },
    {
      title: "Some geology software that i can use",
      volumes: {
        sort: "asc",
        showEmpty: false,
      },
    },
    {
      title: "Educational Background",
      items: [
        { label: "SD Negeri 64 Ladumpi" },
        { label: "SMP Negeri 02 Kasipute" },
        { label: "SMA Negeri 03 Bombana" },
        { label: "AKPRIND University" },
      ],
    },
    {
      title: "Contact",
      items: [
        { label: "IG : @raihanmasere" },
        { label: "Email : raihanmasere@gmail.com" },
      ],
    },
  ],
};
