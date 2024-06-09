import { Avatar, Typography } from "antd";
import './avatar.css';

interface BadgeAvatarProps {
  name: string,
  bgColor: string,
  nameTag?: string,
  emailAddress?: string
}

const BagdeAvatar: React.FC<BadgeAvatarProps> = ({name, bgColor = 'orange', nameTag, emailAddress}) => {
  return (
    <>
    <div className="avatar-container">
      <Avatar style={{backgroundColor: bgColor}}>{name[0]}</Avatar>

      { 
      nameTag != null ? 
      <div className="name-tag">
        <Typography style={{fontWeight: "bold"}}>{nameTag}</Typography>
        <Typography>{emailAddress?.toLocaleLowerCase()}</Typography>
      </div>
      : ""
      }
      
    </div>
        
    </>
  );
};

export default BagdeAvatar;
