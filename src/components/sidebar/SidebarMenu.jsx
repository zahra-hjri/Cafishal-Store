import clsx from "clsx";
import { KeenIcon } from "@/components/keenicons";
import {
  Menu,
  MenuArrow,
  MenuBadge,
  MenuBullet,
  MenuHeading,
  MenuIcon,
  MenuItem,
  MenuLabel,
  MenuLink,
  MenuSub,
  MenuTitle,
} from "@/components/menu";
import { useMenus } from "@/providers";
const SidebarMenu = () => {
  const linkPl = "ps-[10px]";
  const linkPr = "pe-[10px]";
  const linkPy = "py-[6px]";
  const subLinkPy = "py-[8px]";
  const rightOffset = "me-[-10px]";
  const iconWidth = "w-[20px]";
  const iconSize = "text-lg";
  const accordionLinkPl = "ps-[10px]";
  const accordionLinkGap = [
    "gap-[10px]",
    "gap-[14px]",
    "gap-[5px]",
    "gap-[5px]",
    "gap-[5px]",
    "gap-[5px]",
  ];
  const accordionPl = [
    "ps-[10px]",
    "ps-[22px]",
    "ps-[22px]",
    "ps-[22px]",
    "ps-[22px]",
    "ps-[22px]",
  ];
  const accordionBorderLeft = [
    "before:start-[20px]",
    "before:start-[32px]",
    "before:start-[32px]",
    "before:start-[32px]",
    "before:start-[32px]",
  ];
  const buildMenu = (items) => {
    return items.map((item, index) => {
      if (item.heading) {
        return buildMenuHeading(item, index);
      } else if (item.disabled) {
        return buildMenuItemRootDisabled(item, index);
      } else {
        return buildMenuItemRoot(item, index);
      }
    });
  };
  const buildMenuItemRoot = (item, index) => {
    if (item.children) {
      return (
        <MenuItem
          key={index}
          {...(item.toggle && {
            toggle: item.toggle,
          })}
          {...(item.trigger && {
            trigger: item.trigger,
          })}
        >
          <MenuLink
            className={clsx(
              "flex items-center grow cursor-pointer border border-transparent",
              accordionLinkGap[0],
              linkPl,
              linkPr,
              linkPy
            )}
          >
            <MenuIcon
              className={clsx(
                "items-start text-gray-500 dark:text-gray-400",
                iconWidth
              )}
            >
              {item.icon && <KeenIcon icon={item.icon} className={iconSize} />}
            </MenuIcon>
            <MenuTitle className="text-sm font-semibold text-gray-700 menu-item-active:text-primary menu-link-hover:!text-primary">
              {item.title}
            </MenuTitle>
            {buildMenuArrow()}
          </MenuLink>
          <MenuSub
            className={clsx(
              "relative before:absolute before:top-0 before:bottom-0 before:border-l before:border-gray-200",
              "[&_.MuiCollapse-wrapperInner]:flex [&_.MuiCollapse-wrapperInner]:flex-col [&_.MuiCollapse-wrapperInner]:gap-0.5",
              accordionBorderLeft[0],
              accordionPl[0]
            )}
          >
            {buildMenuItemChildren(item.children, index, 1)}
          </MenuSub>
        </MenuItem>
      );
    } else {
      return (
        <MenuItem key={index}>
          <MenuLink
            path={item.path}
            className={clsx(
              "border border-transparent menu-item-active:bg-secondary-active dark:menu-item-active:bg-coal-300 dark:menu-item-active:border-gray-100 menu-item-active:rounded-lg hover:bg-secondary-active dark:hover:bg-coal-300 dark:hover:border-gray-100 hover:rounded-lg",
              accordionLinkGap[0],
              linkPy,
              linkPl,
              linkPr
            )}
          >
            <MenuIcon
              className={clsx(
                "items-start text-gray-500 dark:text-gray-400 menu-item-active:text-primary menu-link-hover:!text-primary",
                iconWidth
              )}
            >
              {item.icon && <KeenIcon icon={item.icon} className={iconSize} />}
            </MenuIcon>
            <MenuTitle className="text-sm font-semibold text-gray-700 menu-item-active:text-primary menu-link-hover:!text-primary">
              {item.title}
            </MenuTitle>
          </MenuLink>
        </MenuItem>
      );
    }
  };
  const buildMenuItemRootDisabled = (item, index) => {
    return (
      <MenuItem key={index}>
        <MenuLabel
          className={clsx(
            "border border-transparent",
            accordionLinkGap[0],
            linkPy,
            linkPl,
            linkPr
          )}
        >
          <MenuIcon
            className={clsx(
              "items-start text-gray-500 dark:text-gray-400",
              iconWidth
            )}
          >
            {item.icon && <KeenIcon icon={item.icon} className={iconSize} />}
          </MenuIcon>
          <MenuTitle className="text-sm font-semibold text-gray-700">
            {item.title}
          </MenuTitle>

          {item.disabled && buildMenuSoon()}
        </MenuLabel>
      </MenuItem>
    );
  };
  const buildMenuItemChildren = (items, index, level = 0) => {
    return items.map((item, index) => {
      if (item.disabled) {
        return buildMenuItemChildDisabled(item, index, level);
      } else {
        return buildMenuItemChild(item, index, level);
      }
    });
  };
  const buildMenuItemChild = (item, index, level = 0) => {
    if (item.children) {
      return (
        <MenuItem
          key={index}
          {...(item.toggle && {
            toggle: item.toggle,
          })}
          {...(item.trigger && {
            trigger: item.trigger,
          })}
          className={clsx(item.collapse && "flex-col-reverse")}
        >
          <MenuLink
            className={clsx(
              "border border-transparent grow cursor-pointer",
              accordionLinkGap[level],
              accordionLinkPl,
              linkPr,
              subLinkPy
            )}
          >
            {buildMenuBullet()}

            {item.collapse ? (
              <MenuTitle className="text-2sm font-medium text-gray-500 dark:text-gray-400">
                <span className="hidden menu-item-show:!flex">
                  {item.collapseTitle}
                </span>
                <span className="flex menu-item-show:hidden">
                  {item.expandTitle}
                </span>
              </MenuTitle>
            ) : (
              <MenuTitle className="text-2sm font-medium mr-1 text-gray-700 menu-item-active:text-primary menu-item-active:font-semibold menu-link-hover:!text-primary">
                {item.title}
              </MenuTitle>
            )}

            {buildMenuArrow()}
          </MenuLink>
          <MenuSub
            className={clsx(
              !item.collapse &&
                "before:top-0 before:bottom-0 before:border-l before:border-gray-200",
              "[&_.MuiCollapse-wrapperInner]:flex [&_.MuiCollapse-wrapperInner]:flex-col [&_.MuiCollapse-wrapperInner]:gap-0.5",
              !item.collapse && accordionBorderLeft[level],
              !item.collapse && accordionPl[level],
              !item.collapse && "relative before:absolute"
            )}
          >
            {buildMenuItemChildren(
              item.children,
              index,
              item.collapse ? level : level + 1
            )}
          </MenuSub>
        </MenuItem>
      );
    } else {
      return (
        <MenuItem key={index}>
          <MenuLink
            path={item.path}
            className={clsx(
              "border border-transparent items-center grow menu-item-active:bg-secondary-active dark:menu-item-active:bg-coal-300 dark:menu-item-active:border-gray-100 menu-item-active:rounded-lg hover:bg-secondary-active dark:hover:bg-coal-300 dark:hover:border-gray-100 hover:rounded-lg",
              accordionLinkGap[level],
              accordionLinkPl,
              linkPr,
              subLinkPy
            )}
          >
            {buildMenuBullet()}
            <MenuTitle className="text-2sm font-medium text-gray-700 menu-item-active:text-primary menu-item-active:font-semibold menu-link-hover:!text-primary">
              {item.title}
            </MenuTitle>
          </MenuLink>
        </MenuItem>
      );
    }
  };
  const buildMenuItemChildDisabled = (item, index, level = 0) => {
    return (
      <MenuItem key={index}>
        <MenuLabel
          className={clsx(
            "border border-transparent items-center grow",
            accordionLinkGap[level],
            accordionLinkPl,
            linkPr,
            subLinkPy
          )}
        >
          {buildMenuBullet()}
          <MenuTitle className="text-2sm font-medium text-gray-700">
            {item.title}
          </MenuTitle>
          {item.disabled && buildMenuSoon()}
        </MenuLabel>
      </MenuItem>
    );
  };
  const buildMenuHeading = (item, index) => {
    return (
      <MenuItem key={index} className="pt-2.25 pb-px">
        <MenuHeading
          className={clsx(
            "uppercase text-2sm font-semibold text-gray-500",
            linkPl,
            linkPr
          )}
        >
          {item.heading}
        </MenuHeading>
      </MenuItem>
    );
  };
  const buildMenuArrow = () => {
    return (
      <MenuArrow
        className={clsx(
          "text-gray-400 w-[20px] shrink-0 justify-end ms-1",
          rightOffset
        )}
      >
        <KeenIcon icon="plus" className="text-2xs menu-item-show:hidden" />
        <KeenIcon
          icon="minus"
          className="text-2xs hidden menu-item-show:inline-flex"
        />
      </MenuArrow>
    );
  };
  const buildMenuBullet = () => {
    return (
      <MenuBullet className="flex w-[6px] relative before:absolute before:top-0 before:size-[6px] before:rounded-full before:-translate-x-1/2 before:-translate-y-1/2 menu-item-active:before:bg-primary menu-item-hover:before:bg-primary"></MenuBullet>
    );
  };
  const buildMenuSoon = () => {
    return (
      <MenuBadge className={rightOffset}>
        <span className="badge badge-xs">Soon</span>
      </MenuBadge>
    );
  };
  const { getMenuConfig } = useMenus();
  const menuConfig = getMenuConfig("primary");
  return (
    <Menu
      highlight={true}
      multipleExpand={false}
      className="flex flex-col grow gap-0.5 bg-green-400"
    >
      {menuConfig && buildMenu(menuConfig)}
    </Menu>
  );
};
export { SidebarMenu };
