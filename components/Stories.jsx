import Story from './Story';
import { useSession } from 'next-auth/react';

const Stories = ({ suggestions }) => {
  const { data: session } = useSession();
  return (
    <div className="flex space-x-2 p-6 bg-white mt-8 border-gray-200 border rounded-sm overflow-x-scroll scrollbar-thumb-black scrollbar-thin">
      {session && (
        <Story username={session.user.username} img={session.user.image} />
      )}
      {suggestions.map((profile) => (
        <Story
          key={profile.login.uuid}
          img={profile.picture.medium}
          username={`${profile.name.first} ${profile.name.last}`}
        />
      ))}
    </div>
  );
};

export default Stories;
