import React, { useRef, useState } from 'react';
import styles from './menu.css';
import { MenuIcon } from '../../../Icons';
import { Dropdown } from '../../../Dropdown';
import { MenuDropdown } from './MenuDropdown';
import { useResize } from '../../../../hooks/useResize';

interface IMenuProps {
  id: string;
}

export function Menu({ id }: IMenuProps) {
  const [isDropdownOpened, setIsDropdownOpened] = useState(false);

  const ref = useRef<HTMLButtonElement>(null);

  const menuLeft = ref.current?.getBoundingClientRect().left;
  const menuTop = ref.current?.getBoundingClientRect().top;
  const menuHeight = ref.current?.offsetHeight

  const { isScreenMobile, isScreenTablet, isScreenDesktop } = useResize();

  function getMenuCoors() {
    if (isScreenMobile) {
      return menuLeft! - 120;
    }

    if (isScreenTablet) {
      return menuLeft! - 60;
    }

    if (isScreenDesktop) {
      return menuLeft! - 50;
    }
  }

  return (
    <div className={styles.menu}>

      <Dropdown
        button={
          <button
            ref={ref}
            className={styles.menuButton}
            onClick={() => {setIsDropdownOpened(true); }}
          >
            <MenuIcon/>
          </button>
        }
      >
        <div className={styles.dropdown}>
          {isDropdownOpened && (
            <MenuDropdown 
              postId={id}
              onClose={() => { setIsDropdownOpened(false); }}
              style={{
                left: `${getMenuCoors()}px`,
                top: `${(menuTop! + menuHeight! + 10)}px`,
              }}/>
          )}
        </div>
      </Dropdown>
    </div>
  );
}
