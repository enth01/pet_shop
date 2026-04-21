export default function PasswordChange4Page() {
    return (
      <div className="card max-w-md mx-auto flex flex-col gap-4 text-center">
        <h1>Password Changed!</h1>
        <p>Your new password has been set successfully.</p>
        <a href="/login" className="btn">Back to Login</a>
      </div>
    );
  }
  