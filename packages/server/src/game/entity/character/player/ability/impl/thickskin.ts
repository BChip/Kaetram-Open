import Player from '../../player';
import Ability from '../ability';

export default class ThickSkin extends Ability {
    public constructor(level: number, quickSlot = -1) {
        super('thickskin', level, quickSlot);
    }

    /**
     * Override for the superclass activate implementation. We update the player's movement
     * speed when the run ability is used.
     * @param player The player we are updating the movement speed for.
     */

    public override activate(player: Player): boolean {
        if (!player.hasTarget()) {
            player.notify(`You must be in combat to use this ability.`);
            return false;
        }

        return super.activate(player);
    }
}
