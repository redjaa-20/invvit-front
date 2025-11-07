// ------------------------------------------------------------------

const ROOTS = {
  AUTH: "/auth",
  AUTH_DEMO: "/auth-demo",
  DASHBOARD: "/dashboard",
};

// ------------------------------------------------------------------

export const paths = {
  auth: {
    signIn: `${ROOTS.AUTH}/sign-in`,
    signUp: `${ROOTS.AUTH}/sign-up`,
  },
  dashboard: {
    root: ROOTS.DASHBOARD,
    invoice: {
      root: `${ROOTS.DASHBOARD}/invoice`,
    },
    template: {
      root: `${ROOTS.DASHBOARD}/template`,
    },
    member: {
      root: `${ROOTS.DASHBOARD}/member`,
    },
  },
};
