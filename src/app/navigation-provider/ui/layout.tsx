import { FooterWidget } from "@widgets/footer";
import { HeaderWidget } from "@widgets/header";
import { useMemo, useState } from "react";
import { Outlet } from "react-router-dom";
import LayoutContext, { LayoutContextValue } from "./layout-context";

export const Layout = ({ }) => {
  const [footerVisibility, setFooterVisibility] = useState(true)
  const handleVisibility = (e: boolean) => {
    setFooterVisibility(e)
  }
  const contextValue = useMemo<LayoutContextValue>(() => ({
    footerVisibility,
    setFooterVisibility: handleVisibility
  }), [footerVisibility, handleVisibility])

  return (
    <LayoutContext.Provider value={contextValue}>
      <HeaderWidget
        onLogoClick={() => { }}
        onBackwardClick={() => { }}
        onSunClick={() => { }}
        onDownloadClick={() => { }}
        isLogo={true}
      />
      <Outlet />
      {
        footerVisibility && (
          <FooterWidget
            onLogoClick={() => { }}
            onLinkClick={() => { }}
            onArrowupClick={() => { }}
          />
        )
      }
    </LayoutContext.Provider>
  );
};
