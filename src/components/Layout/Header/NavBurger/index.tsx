import { Menu } from "@mui/material";
import { FC, MouseEvent, useState } from "react";
import styles from "./style.module.css";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { FeaturesLinkListData, LinkListData } from "../../../../constants";

const NavBurger: FC = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const [collapseOpen, setCollapseOpen] = useState<boolean>(false);

  const handleCollapseAppear = () => {
    setCollapseOpen(!collapseOpen);
  };

  const handleClick = (event: MouseEvent<HTMLDivElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <div
        id="burger-button"
        aria-controls={open ? "burger-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        className={
          anchorEl ? styles["nav-open"] + " " + styles.burger : styles.burger
        }
      >
        <svg
          width="1em"
          height="1em"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="12" cy="4" r="2" fill="currentColor"></circle>
          <circle cx="12" cy="12" r="2" fill="currentColor"></circle>
          <circle cx="4" cy="4" r="2" fill="currentColor"></circle>
          <circle cx="4" cy="12" r="2" fill="currentColor"></circle>
        </svg>
      </div>
      <Menu
        id="burger-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "burger-button",
        }}
        className={styles["burger-menu"]}
        style={{ marginTop: 10 }}
      >
        <div
          onClick={handleCollapseAppear}
          onMouseOver={() => setCollapseOpen(true)}
          onMouseLeave={() => setCollapseOpen(true)}
        >
          <div>
            <span>Features</span> <KeyboardArrowRightIcon style={{width: 16}} className={!collapseOpen ? styles['arrow-right'] : styles['arrow-down']} />
          </div>
          <div
            style={{ display: collapseOpen ? "flex" : "none" }}
            className={styles.subnav}
          >
            <div className={styles["subnav-content"]}>
              <span>Advanced content editing features</span>
              <div>
                {FeaturesLinkListData.map((item, index) => {
                  if (index <= 3) {
                    return (
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
                    );
                  }
                })}
              </div>
            </div>
            <div className={styles["subnav-content"]}>
              <span>Workflow boost & Infrastructure</span>
              <div>
                {FeaturesLinkListData.map((item, index) => {
                  if (index > 3) {
                    return (
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
                    );
                  }
                })}
              </div>
            </div>
          </div>
        </div>
        {LinkListData.map((item) => (
          <a
            href={item.url}
            key={`burger-${item.title}`}
            className={styles["nav-link"]}
            onClick={handleClose}
          >
            {item.title}
          </a>
        ))}
      </Menu>
    </div>
  );
};

export default NavBurger;
