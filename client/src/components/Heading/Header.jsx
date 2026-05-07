import Profile from "./Profile";

function Header({ user, onLogout }) {
  return (
    <section className="flex justify-between items-start mb-5 rounded-2xl border border-purple-100 p-4">

        <Profile user={user} onLogout={onLogout} />

      <div>
        <div className="inline-flex items-center gap-2 rounded-full bg-purple-700 px-4 py-2 text-sm font-medium text-white shadow-sm">
          <span>📋</span>
          <span>Smart Notes Manager</span>
        </div>

        <p className="mt-2 max-w-xl text-white sm:text-base">
          Create, edit, delete, and prioritize your notes.
        </p>
      </div>

      

    </section>
  );
}

export default Header;