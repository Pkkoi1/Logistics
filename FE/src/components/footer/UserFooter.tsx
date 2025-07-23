import React from "react";
import { Facebook, X, Instagram } from "lucide-react";

const UserFooter: React.FC = () => {
  return (
    <footer className="bg-slate-700 px-4 py-4">
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        {/* Copyright Text */}
        <div className="text-sm text-white">
          © Bản quyền thuộc về{" "}
          <span className="text-blue-300">Awesome Team</span>
          {" | "}
          Cung cấp bởi{" "}
          <a
            href="https://template-logistics.mysapo.net/"
            className="text-blue-300"
          >
            Sapo
          </a>
        </div>

        {/* Social Media Icons */}
        <div className="flex items-center space-x-4">
          <a
            href="#"
            className="text-white hover:text-blue-300 transition-colors"
            aria-label="Facebook"
          >
            <Facebook className="h-5 w-5" />
          </a>
          <a
            href="#"
            className="text-white hover:text-blue-300 transition-colors"
            aria-label="X (Twitter)"
          >
            <X className="h-5 w-5" />
          </a>
          <a
            href="#"
            className="text-white hover:text-blue-300 transition-colors"
            aria-label="Google Plus"
          >
            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M7.635 10.909v2.619h4.335c-.173 1.125-1.31 3.295-4.335 3.295-2.613 0-4.75-2.16-4.75-4.823s2.137-4.823 4.75-4.823c1.487 0 2.482.633 3.045 1.178l2.073-1.994c-1.33-1.245-3.056-1.995-5.118-1.995C3.44 4.363 0 7.803 0 12s3.44 7.637 7.635 7.637c4.41 0 7.332-3.098 7.332-7.464 0-.501-.054-.885-.12-1.264H7.635zm16.365 0h-2.183V8.726h-2.183v2.183h-2.182v2.181h2.182v2.184h2.183v-2.184H24v-2.181z" />
            </svg>
          </a>
          <a
            href="#"
            className="text-white hover:text-blue-300 transition-colors"
            aria-label="Instagram"
          >
            <Instagram className="h-5 w-5" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default UserFooter;
