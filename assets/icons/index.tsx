import React from 'react';
import { theme } from '../../constants/theme';
import Home from './Home';
import Mail from './Mail';
import Lock from './Lock';
import User from './User';
import Heart from './Heart';
import Plus from './Plus';
import Search from './Search';
import Location from './Location';
import Call from './Call';
import Camera from './Camera';
import Edit from './Edit';
import ArrowLeft from './ArrowLeft';
import ThreeDotsCircle from './ThreeDotsCircle';
import ThreeDotsHorizontal from './ThreeDotsHorizontal';
import Comment from './Comment';
import Share from './Share';
import Send from './Send';
import Delete from './Delete';
import Logout from './logout';
import Image from './Image';
import Video from './Video';

// Define the available icons as a type
type IconName =
  | 'home'
  | 'mail'
  | 'lock'
  | 'user'
  | 'heart'
  | 'plus'
  | 'search'
  | 'location'
  | 'call'
  | 'camera'
  | 'edit'
  | 'arrowLeft'
  | 'threeDotsCircle'
  | 'threeDotsHorizontal'
  | 'comment'
  | 'share'
  | 'send'
  | 'delete'
  | 'logout'
  | 'image'
  | 'video';

// Map the icon components to their names
const icons: Record<IconName, React.FC<IconProps>> = {
  home: Home,
  mail: Mail,
  lock: Lock,
  user: User,
  heart: Heart,
  plus: Plus,
  search: Search,
  location: Location,
  call: Call,
  camera: Camera,
  edit: Edit,
  arrowLeft: ArrowLeft,
  threeDotsCircle: ThreeDotsCircle,
  threeDotsHorizontal: ThreeDotsHorizontal,
  comment: Comment,
  share: Share,
  send: Send,
  delete: Delete,
  logout: Logout,
  image: Image,
  video: Video,
};

// Define props for the Icon component
interface IconProps {
  name: IconName;
  size?: number; // Optional size for height and width
  strokeWidth?: number; // Optional stroke width
  color?: string; // Optional color (defaults to theme.colors.textLight)
}

const Icon: React.FC<IconProps> = ({ name, size = 24, strokeWidth = 1.9, color = theme.colors.textLight, ...props }) => {
  const IconComponent = icons[name];

  if (!IconComponent) {
    console.warn(`No icon found for name "${name}"`);
    return null;
  }

  return (
    <IconComponent
      height={size}
      width={size}
      strokeWidth={strokeWidth}
      color={color}
      {...props}
    />
  );
};

export default Icon;