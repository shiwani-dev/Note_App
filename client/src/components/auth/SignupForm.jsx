import p1 from "../../assets/p1.jpg";
import { Link } from "react-router-dom";

function SignupForm ({
    handleSignup,
    error,
    setName,
    email,
    setEmail,
    password,
    setPassword,
    loading,

}) {



    return (

        <div
      style={{ backgroundImage: `url(${p1})` }}
      className="flex min-h-screen items-center justify-center bg-cover bg-center "
    >
      <form
        onSubmit={handleSignup}
        className="w-full max-w-md rounded-1xl border border-white/30 bg-white/25 p-8 shadow-2xl backdrop-blur-md"
      >
        <div className="text-center">
          <h1 className="mb-2 text-3xl font-extrabold text-purple-700">
            Sign Up
          </h1>

          <p className="mb-5 text-sm ">
            Create your account and start organizing your notes.
          </p>
        </div>

        {error && (
          <p className="mb-4 rounded-xl bg-red-50 px-4 py-2 text-center text-sm font-medium text-red-600">
            {error}
          </p>
        )}

        <div className="flex gap-3">
          <button
            type="button"
            className="flex-1 rounded-1xl bg-white/80 py-2 text-sm font-medium text-slate-700 transition hover:bg-violet-100"
          >
            Google
          </button>

          <button
            type="button"
            className="flex-1 rounded-1xl bg-white/80 py-2 text-sm font-medium text-slate-700 transition hover:bg-violet-100"
          >
            Facebook
          </button>
        </div>

        <div className="my-5 flex items-center gap-3 text-xs text-slate-400">
          <div className="h-px flex-1 bg-slate-300"></div>
          <span>or</span>
          <div className="h-px flex-1 bg-slate-300"></div>
        </div>

        <div>
          <label className="text-sm font-medium ">
            Full Name
          </label>

          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your full name"
            className="mt-2 w-full rounded-1xl border border-white/40 bg-white/80 px-4 py-3 text-sm outline-none focus:border-violet-400 focus:ring-4 focus:ring-violet-100"
          />
        </div>

        <div className="mt-4">
          <label className="text-sm font-medium ">Email</label>

          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="mt-2 w-full rounded-1xl border border-white/40 bg-white/80 px-4 py-3 text-sm outline-none focus:border-violet-400 focus:ring-4 focus:ring-violet-100"
          />
        </div>

        <div className="mt-4">
          <label className="text-sm font-medium ">
            Password
          </label>

          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Create a password"
            className="mt-2 w-full rounded-1xl border border-white/40 bg-white/80 px-4 py-3 text-sm outline-none focus:border-violet-400 focus:ring-4 focus:ring-violet-100"
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="mt-5 w-full rounded-1xl bg-violet-600 py-3 text-sm font-semibold text-white transition hover:bg-violet-700 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {loading ? "Creating account..." : "Create Account"}
        </button>

        <p className="mt-4 text-center text-sm ">
          Already have an account?{" "}
          <Link to="/login" className="font-semibold text-violet-700">
            Login
          </Link>
        </p>
      </form>
    </div>


    );
};

export default SignupForm;