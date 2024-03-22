import * as React from "react";

import {
  AppBar,
  AppBarSection,
  AppBarSpacer,
  Avatar,
} from "@progress/kendo-react-layout";
import { SvgIcon } from "@progress/kendo-react-common";
import { logoutIcon } from "@progress/kendo-svg-icons";
import "@progress/kendo-theme-default/dist/all.css";
import { useNavigate } from "react-router-dom";

let kendokaAvatar =
  "https://www.telerik.com/kendo-react-ui-develop/components/images/kendoka-react.png";

interface navbarProps {
  children: React.ReactNode;
}

export const Navbar = ({ children }: navbarProps) => {
  const navigation = useNavigate();
  return (
    <React.Fragment>
      <AppBar>
        <AppBarSection>
          <button
            className="k-button k-button-md k-rounded-md k-button-flat k-button-flat-base"
            onClick={() => navigation("login")}
          >
            <SvgIcon icon={logoutIcon} />
          </button>
        </AppBarSection>

        <AppBarSpacer style={{ width: 4 }} />

        <AppBarSection>
          <h1 className="title">KendoReact</h1>
        </AppBarSection>

        <AppBarSpacer style={{ width: 32 }} />

        <AppBarSection>
          <span className="k-appbar-separator" />
        </AppBarSection>

        <AppBarSection>
          <Avatar type="image">
            <img src={kendokaAvatar} alt="KendoReact Layout Kendoka Avatar" />
          </Avatar>
        </AppBarSection>
      </AppBar>
      {children}
      <style>{`
                body {
                    background: #EEFCFF;
                }
                .title {
                    font-size: 18px;
                    margin: 0;
                }
                ul {
                    font-size: 14px;
                    list-style-type: none;
                    padding: 0;
                    margin: 0;
                    display: flex;
                }
                li {
                    margin: 0 10px;
                }
                li:hover {
                    cursor: pointer;
                    color: #84cef1;
                }
                .k-button k-button-md k-rounded-md k-button-solid k-button-solid-base {
                    padding: 0;
                }
                .k-badge-container {
                    margin-right: 8px;
                }
            `}</style>
    </React.Fragment>
  );
};
