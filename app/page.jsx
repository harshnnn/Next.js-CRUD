import AuthForm from "./components/AuthForm";


export default function Home() {
  return (
    <div className="bg-gray-900 text-gray-200 min-h-screen flex justify-center items-center">
      <div className="max-w-lg p-8 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold mb-4">Welcome To Watch List</h1>
        <p className="text-sm mb-6">
          Your personal space to curate and manage a wishlist of your favorite watches.
          Sign in to create, view, edit, and delete watches from your wishlist.
        </p>
        <div>
          <AuthForm />
        </div>
      </div>
    </div>

  );
}
