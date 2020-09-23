import { ForbiddenError } from '../utils/errors';
import { checkPermission } from '../utils/permissions';

export default function verifyPermission(permission = null) {
    return async (req, res, next) => {
        if (req.token.user) {
            if (!permission) {
                throw new ForbiddenError('User does not have permission for this action.');
            }
            const microfranchise = req.query.microfranchiseId || req.body.microfranchiseId;
            const hasPermission = await checkPermission(req.token.user.id, permission, microfranchise);

            if (!hasPermission) {
                throw new ForbiddenError('User does not have permission for this action.');
            }
        }

        next();
    };
}
