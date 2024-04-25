export interface PostProps {
  objects: ObjectPost[];
}

interface ObjectPost {
  slug: string;
  title: string;
  metadata: {
    banner: {
      url: string;
    };
    description: {
      title: string;
      text: string;
      banner: {
        url: string;
      };
      button_url: string;
      button_title: string;
      button_active: boolean;
    };
    button: {
      title: string;
      url: string;
    };
  };
}
