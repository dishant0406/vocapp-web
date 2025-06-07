import Link from "next/link";

export function Footer() {
  return (
    <footer className="container mx-auto px-4 py-10 border-t border-gray-200 mt-20">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <div className="text-sm text-gray-500 mb-4 md:mb-0">
          &copy; {new Date().getFullYear()} Vocapp. All rights reserved.
        </div>
        <div className="flex space-x-6">
          <Link href={'/contact'} className="text-sm text-gray-500 hover:text-gray-700">Contact</Link>
          <Link href={'/privacy-policy'} className="text-sm text-gray-500 hover:text-gray-700">Privacy policy</Link>
          <Link href={'/terms-conditions'} className="text-sm text-gray-500 hover:text-gray-700">Terms & conditions</Link>
        </div>
      </div>
    </footer>
  );
}
