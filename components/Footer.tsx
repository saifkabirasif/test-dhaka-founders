export default function Footer() {
  return (
    <footer className="bg-secondary border-t border-gray-800 py-8 mt-auto">
      <div className="container mx-auto px-4 text-center text-gray-400">
        <p className="font-body">&copy; {new Date().getFullYear()} Dhaka Founders. All rights reserved.</p>
        <p className="mt-2 text-sm">Building the future of Dhaka's startup ecosystem.</p>
      </div>
    </footer>
  );
}
