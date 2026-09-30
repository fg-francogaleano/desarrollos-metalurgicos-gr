interface LinkedInIconProps {
  size?: number;
}

export default function LinkedInIcon({ size = 17 }: LinkedInIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill="currentColor"
      aria-hidden="true"
      focusable="false"
    >
      <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.21c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.227 2.4 3.936c0 .694.52 1.248 1.327 1.248zm4.908 8.21V9.359c0-.216.016-.432.08-.586.173-.432.568-.88 1.23-.88.868 0 1.215.663 1.215 1.63v3.871h2.4V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
    </svg>
  );
}