import React from 'react'
import ProfileImage from '../../../assets/png/avatar.png';
const UserCard = ({auth}) => {
  return (
    <div className="dark:bg-gray-800 gap-6 rounded-xl border dark:border-gray-700 flex items-center justify-center">
  <div
    className="bg-gray-100 dark:bg-gray-800  relative shadow-xl overflow-hidden hover:shadow-2xl group rounded-xl p-5 transition-all duration-500 transform">
    <div className="flex items-center gap-4">
      <img src={ProfileImage}
      className="w-32 group-hover:w-36 group-hover:h-36 h-32 object-center object-cover rounded-full transition-all duration-500 delay-500 transform"
    />
      <div className="w-fit transition-all transform duration-500">
        <h1 className="text-gray-600 dark:text-gray-200 font-bold">
          {auth.user.name}
        </h1>
        <p className="text-gray-400">{auth.user.role}</p>
        <a
          className="text-xs text-gray-500 dark:text-gray-400  transform transition-all delay-300 duration-500">
          {auth.user.email}
        </a>
      </div>
    </div>

  </div>
</div>
  )
}

export default UserCard
