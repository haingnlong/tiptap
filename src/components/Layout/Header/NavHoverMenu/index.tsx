import { ClickAwayListener, Grow, Paper, Popper } from "@mui/material";
import * as React from "react";
import styles from "./style.module.css";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { ConfidentListData, FeaturesLinkListData } from "../../../../constants";
import { Checked, NextArrow } from "../../../../assets";

const NavHoverMenu: React.FC = () => {
  const [open, setOpen] = React.useState<boolean>(false);
  const anchorRef = React.useRef<HTMLDivElement>(null);

  const handleToggle: VoidFunction = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event: Event | React.SyntheticEvent) => {
    if (
      anchorRef.current &&
      anchorRef.current.contains(event.target as HTMLElement)
    ) {
      return;
    }

    setOpen(false);
  };

  const handleListKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === "Tab") {
      event.preventDefault();
      setOpen(false);
    } else if (event.key === "Escape") {
      setOpen(false);
    }
  };

  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current!.focus();
    }

    prevOpen.current = open;
  }, [open]);

  return (
    <div
      onMouseOver={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      className={styles["menu-wrapper"]}
    >
      <div
        ref={anchorRef}
        id="composition-button"
        aria-controls={open ? "composition-menu" : undefined}
        aria-expanded={open ? "true" : undefined}
        aria-haspopup="true"
        onClick={handleToggle}
        className={styles.button}
      >
        <div className={styles["button-text"]}>Features</div>
        <div className={styles["button-icon"]}>
          <KeyboardArrowDownIcon className={styles.icon} />
        </div>
      </div>
      <Popper
        open={open}
        anchorEl={anchorRef.current}
        role={undefined}
        placement="auto"
        transition
        disablePortal
        className={styles.popper}
      >
        {({ TransitionProps }) => (
          <Grow
            {...TransitionProps}
            style={{
              transformOrigin: "center",
            }}
          >
            <Paper style={{ marginTop: 20 }}>
              <ClickAwayListener onClickAway={handleClose}>
                <div
                  id="composition-menu"
                  aria-labelledby="composition-button"
                  onKeyDown={handleListKeyDown}
                  className={styles.subnav}
                >
                  <div className={styles["subnav-left"]}>
                    <div className={styles["subnav-left-content"]}>
                      <span>Advanced content editing features</span>
                      <div>
                        {FeaturesLinkListData.map(
                          (item, index) =>
                            index <= 3 && (
                              <a href={item.url} key={item.title}>
                                <div>
                                  <img src={item.icon} alt={item.title} />
                                </div>
                                <div>
                                  <div>
                                    <span>{item.title}</span>
                                    {item.beta ? (
                                      <div className={styles.beta}>Beta</div>
                                    ) : null}
                                  </div>
                                  <span>{item.description}</span>
                                </div>
                              </a>
                            )
                        )}
                      </div>
                    </div>
                    <div className={styles["subnav-left-content"]}>
                      <span>Workflow boost & Infrastructure</span>
                      <div>
                        {FeaturesLinkListData.map(
                          (item, index) =>
                            index > 3 && (
                              <a href={item.url} key={item.title + index}>
                                <div>
                                  <img src={item.icon} alt={item.title} />
                                </div>
                                <div>
                                  <div>
                                    <span>{item.title}</span>
                                    {item.beta ? (
                                      <div className={styles.beta}>Beta</div>
                                    ) : null}
                                  </div>
                                  <span>{item.description}</span>
                                </div>
                              </a>
                            )
                        )}
                      </div>
                    </div>
                  </div>
                  <div className={styles["subnav-right"]}>
                    <div>
                      <div>
                        <img
                          src="https://cdn.prod.website-files.com/645a9acecda2e0594fac6126/6515f40fe58d34bf4ce776a2_entprise-small.png"
                          alt="deco"
                        />
                      </div>
                      <div>
                        <span>Confidently scale with Enterprise</span>
                        <div className={styles["confident-list"]}>
                          {ConfidentListData.map((item) => (
                            <div key={item}>
                              <img src={Checked} alt="checked" />
                              <span>{item}</span>
                            </div>
                          ))}
                        </div>
                        <a href="/">
                          Let's talk{" "}
                          <img src={NextArrow} alt="next-arrow" width={12} />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </div>
  );
};

export default NavHoverMenu;
