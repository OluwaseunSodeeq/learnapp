import Link from "next/link";

export default function Navigation() {
  return (
    <div>
        <h1>Navigation</h1>

        <ul>
            <li><Link href="/dashboard">Dashboard</Link></li>
            <li><Link href="/calendar">Calendar</Link></li>
            <li><Link href="/courses">Courses</Link></li>
            <li><Link href="/services">Services</Link></li>
            <li><Link href="/users">Users</Link></li>
            <li><Link href="/profile">Profile</Link></li>
            <li><Link href="/contact">Contact</Link></li>
            <li><Link href="/organisation">Organisation</Link></li>
        </ul>
    </div>
  )
}
