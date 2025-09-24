import { Avatar, AvatarFallback } from "@/GlobalCustomerDetails/components/ui/avatar";
import { Badge } from "@/GlobalCustomerDetails/components/ui/badge";
import { Card, CardContent } from "@/GlobalCustomerDetails/components/ui/card";
import { User, Mail, Phone, MapPin, Calendar, Clock } from "lucide-react";
import styles from "./CustomerProfileHeader.module.scss";

interface User {
  firstName: string;
  lastName: string;
  dateOfBirth: string;
  countryOfResidence: string;
  language: string;
  phoneNumber: string;
  emailAddress: string;
  timeCreated: string;
  lastLoginDate: string;
  userId: string;
  kycStatus: "Verified" | "Pending" | "Rejected";
}

interface CustomerProfileHeaderProps {
  user: User;
}

export function CustomerProfileHeader({ user }: CustomerProfileHeaderProps) {
  const getKycStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case "verified":
        return styles.statusVerified;
      case "pending":
        return styles.statusPending;
      case "rejected":
        return styles.statusRejected;
      default:
        return styles.statusDefault;
    }
  };

  return (
    <Card className={styles.profileCard}>
      <CardContent className={styles.profileContent}>
        <div className={styles.profileHeader}>
          <div className={styles.avatarSection}>
            <Avatar className={styles.avatar}>
              <AvatarFallback className={styles.avatarFallback}>
                {user.firstName.charAt(0)}{user.lastName.charAt(0)}
              </AvatarFallback>
            </Avatar>
            <div className={styles.userInfo}>
              <h1 className={styles.userName}>
                {user.firstName} {user.lastName}
              </h1>
              <div className={styles.userMeta}>
                <span className={styles.userId}>{user.userId}</span>
                <Badge className={`${styles.kycBadge} ${getKycStatusColor(user.kycStatus)}`}>
                  {user.kycStatus}
                </Badge>
              </div>
            </div>
          </div>
        </div>
        
        <div className={styles.quickStats}>
          <div className={styles.statItem}>
            <Mail className={styles.statIcon} />
            <div className={styles.statInfo}>
              <span className={styles.statLabel}>Email</span>
              <span className={styles.statValue}>{user.emailAddress}</span>
            </div>
          </div>
          
          <div className={styles.statItem}>
            <Phone className={styles.statIcon} />
            <div className={styles.statInfo}>
              <span className={styles.statLabel}>Phone</span>
              <span className={styles.statValue}>{user.phoneNumber}</span>
            </div>
          </div>
          
          <div className={styles.statItem}>
            <MapPin className={styles.statIcon} />
            <div className={styles.statInfo}>
              <span className={styles.statLabel}>Location</span>
              <span className={styles.statValue}>{user.countryOfResidence}</span>
            </div>
          </div>
          
          <div className={styles.statItem}>
            <Calendar className={styles.statIcon} />
            <div className={styles.statInfo}>
              <span className={styles.statLabel}>Member Since</span>
              <span className={styles.statValue}>{user.timeCreated}</span>
            </div>
          </div>
          
          <div className={styles.statItem}>
            <Clock className={styles.statIcon} />
            <div className={styles.statInfo}>
              <span className={styles.statLabel}>Last Login</span>
              <span className={styles.statValue}>{user.lastLoginDate}</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}