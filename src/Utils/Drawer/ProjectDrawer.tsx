import {  Drawer } from 'antd';

const ProjectDrawer = ({showDrawer}) => {
  return (
    <Drawer
    title="Basic Drawer"
    placement={'right'}
    closable={true}
    open={showDrawer}
  >
    <p>Some contents...</p>
    <p>Some contents...</p>
    <p>Some contents...</p>
  </Drawer>
  )
}

export default ProjectDrawer