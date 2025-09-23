import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Mail, Phone, MapPin, Globe, User, Clock, Shield } from "lucide-react";

interface AccountDetailsProps {
  user: {
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
  };
}

export function AccountDetailsCard({ user }: AccountDetailsProps) {
  const getKycStatusColor = (status: string) => {
    switch (status) {
      case "Verified": return "bg-success text-success-foreground";
      case "Pending": return "bg-warning text-warning-foreground";
      case "Rejected": return "bg-destructive text-destructive-foreground";
      default: return "bg-muted text-muted-foreground";
    }
  };

  return (
    <Card className="col-span-2">
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <User className="w-5 h-5 text-primary" />
          <span>Account Details</span>
          <Badge className={getKycStatusColor(user.kycStatus)}>
            {user.kycStatus}
          </Badge>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="space-y-4">
            <div>
              <label className="text-sm font-medium text-muted-foreground">Full Name</label>
              <p className="text-base font-medium">{user.firstName} {user.lastName}</p>
            </div>
            <div>
              <label className="text-sm font-medium text-muted-foreground flex items-center space-x-1">
                <Calendar className="w-4 h-4" />
                <span>Date of Birth</span>
              </label>
              <p className="text-base">{user.dateOfBirth}</p>
            </div>
            <div>
              <label className="text-sm font-medium text-muted-foreground flex items-center space-x-1">
                <MapPin className="w-4 h-4" />
                <span>Country</span>
              </label>
              <p className="text-base">{user.countryOfResidence}</p>
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <label className="text-sm font-medium text-muted-foreground flex items-center space-x-1">
                <Globe className="w-4 h-4" />
                <span>Language</span>
              </label>
              <p className="text-base">{user.language}</p>
            </div>
            <div>
              <label className="text-sm font-medium text-muted-foreground flex items-center space-x-1">
                <Phone className="w-4 h-4" />
                <span>Phone Number</span>
              </label>
              <p className="text-base">{user.phoneNumber}</p>
            </div>
            <div>
              <label className="text-sm font-medium text-muted-foreground flex items-center space-x-1">
                <Mail className="w-4 h-4" />
                <span>Email Address</span>
              </label>
              <p className="text-base">{user.emailAddress}</p>
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <label className="text-sm font-medium text-muted-foreground flex items-center space-x-1">
                <Clock className="w-4 h-4" />
                <span>Account Created</span>
              </label>
              <p className="text-base">{user.timeCreated}</p>
            </div>
            <div>
              <label className="text-sm font-medium text-muted-foreground flex items-center space-x-1">
                <Clock className="w-4 h-4" />
                <span>Last Login</span>
              </label>
              <p className="text-base">{user.lastLoginDate}</p>
            </div>
            <div>
              <label className="text-sm font-medium text-muted-foreground flex items-center space-x-1">
                <Shield className="w-4 h-4" />
                <span>User ID</span>
              </label>
              <p className="text-base font-mono text-sm">{user.userId}</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}