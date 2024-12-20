import React, { FC } from 'react'

const Profile: FC<{ children: React.ReactNode; className?: string }> = ({ children, className = "" }) => {
  return (
    <div 
    data-testid="profile-component"
    className={`w-full h-full inline-block z-0 bg-light p-32 dark:bg-dark xl:p-20 lg:p-16 md:p-12 sm:p-8 ${className}`}>
        {children}
        </div>
  )
}

export default Profile