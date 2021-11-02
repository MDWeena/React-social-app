import React, {useState} from 'react'
import './profile.css'
import { Avatar } from '@material-ui/core'

const Profile = () => {
    let avatar = <Avatar />
    const [profileImage, setProfileImage] = useState(avatar);
    const [coverImage, setCoverImage] = useState(avatar);
    return (
        <div className="profile">
            <div className="profile__top">
                <label htmlFor="media" className="profile__pic">
                {
                    coverImage && (
                        <img src={coverImage} alt="" />
                    )   
                }
                    <input 
                        style={{display: 'none'}}
                        type="file"
                        id='media'
                        accept='image/*'
                        onChange={(e) => setCoverImage(e.target.files[0])}
                    />
                </label>

                <label htmlFor="media" className="profile__pic">
                {
                    profileImage && (
                        <img src={profileImage} alt="" />
                    )   
                }
                    <input 
                        style={{display: 'none'}}
                        type="file"
                        id='media'
                        accept='image/*'
                        onChange={(e) => setProfileImage(e.target.files[1])}
                    />
                </label>
            </div>
        </div>
    )
}

export default Profile
