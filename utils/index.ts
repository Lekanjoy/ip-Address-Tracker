export type userInfoProps = {
  userInfo: {
    ip: string;
    isp: string;
    location: {
      country: string;
      region: string;
      timezone: string;
    };
  };
};

export const initialUserInfo: userInfoProps = {
  userInfo: {
    ip: "",
    isp: "",
    location: {
      country: "",
      region: "",
      timezone: "",
    },
  },
};
