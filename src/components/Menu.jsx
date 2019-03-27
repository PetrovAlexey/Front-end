import React from 'react'
import { Menu } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'

function handleItemClick() {
    return null
}

const MenuComponent = () => (
    <Menu>
        <Menu.Item name='browse' onClick={handleItemClick}>
          Магазин
        </Menu.Item>

        <Menu.Item name='submit'  onClick={handleItemClick}>
          Submit
        </Menu.Item>

        <Menu.Menu position='right'>
          <Menu.Item name='signup' onClick={handleItemClick}>
            Sign Up
          </Menu.Item>

          <Menu.Item name='help' onClick={handleItemClick}>
            Help
          </Menu.Item>
        </Menu.Menu>
      </Menu>
);
export default MenuComponent;