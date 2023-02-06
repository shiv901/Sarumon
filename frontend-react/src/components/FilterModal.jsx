
export default function FilterModal({ filters, setFilters }) {
  return (
    <div className="filter-modal" onClick={(e) => e.stopPropagation()}>
      <div className="drop-items">
        <span>Ability: </span>
        <select className="w-full rounded-lg px-2" value={filters.ability} onChange={(e) => setFilters(prev => ({ ...prev, ability: e.target.value }))}>
          <option value="" label="All"></option>
          <option value="Shadow" label="Shadow"></option>
          <option value="Tail Magnet" label="Tail Magnet"></option>
          <option value="Petromax" label="Petromax"></option>
          <option value="Double Earthquake" label="Double Earthquake"></option>
          <option value="Rain Bolts" label="Rain Bolts"></option>
          <option value="Thorn Spray" label="Thorn Spray"></option>
          <option value="Goliath's Fury" label="Goliath's Fury"></option>
          <option value="Hyper Wings" label="Hyper Wings"></option>
          <option value="Water Pump" label="Water Pump"></option>
          <option value="Outage" label="Outage"></option>
          <option value="Spinning Flower" label="Spinning Flower"></option>
          <option value="Muddylicious" label="Muddylicious"></option>
          <option value="Braceleto" label="Braceleto"></option>
          <option value="Dizzying" label="Dizzying"></option>
          <option value="Ultimate Kick" label="Ultimate Kick"></option>
          <option value="Corruption" label="Corruption"></option>
          <option value="Ultra Poison" label="Ultra Poison"></option>
          <option value="Dark Aura" label="Dark Aura"></option>
          <option value="Dragon Scales" label="Dragon Scales"></option>
          <option value="Delete File" label="Delete File"></option>
          <option value="Nova Blast" label="Nova Blast"></option>
          <option value="Dark Cyclone" label="Dark Cyclone"></option>
          <option value="Metal Roller" label="Metal Roller"></option>
          <option value="Water Canon" label="Water Canon"></option>
          <option value="Sucker Slash" label="Sucker Slash"></option>
          <option value="Metal Shield" label="Metal Shield"></option>
          <option value="Under Punch" label="Under Punch"></option>
          <option value="Golden Rain" label="Golden Rain"></option>
          <option value="Great Horned" label="Great Horned"></option>
          <option value="Aqua Stunt" label="Aqua Stunt"></option>
          <option value="Jump Volt" label="Jump Volt"></option>
          <option value="Illusion" label="Illusion"></option>
          <option value="Behemoth Smash" label="Behemoth Smash"></option>
          <option value="Blessing Magic" label="Blessing Magic"></option>
          <option value="Magma Flare" label="Magma Flare"></option>
          <option value="Trailbot" label="Trailbot"></option>
          <option value="Spinning Chain" label="Spinning Chain"></option>
          <option value="Snoozing" label="Snoozing"></option>
          <option value="Sky Strike" label="Sky Strike"></option>
          <option value="Conscious Sleep" label="Conscious Sleep"></option>
          <option value="Eye of Skull" label="Eye of Skull"></option>
          <option value="Shiny Emerald" label="Shiny Emerald"></option>
        </select>
      </div>
      <div className="drop-items">
        <span>Type:</span>
        <select className="w-full rounded-lg px-2" value={filters.type} onChange={(e) => setFilters(prev => ({ ...prev, type: e.target.value }))}>
          <option value="" label="All"></option>
          <option value="Flying" label="Flying"></option>
          <option value="Steel" label="Steel"></option>
          <option value="Water" label="Water"></option>
          <option value="Normal" label="Normal"></option>
          <option value="Earth" label="Earth"></option>
          <option value="Giant" label="Giant"></option>
          <option value="Digital" label="Digital"></option>
          <option value="Grass" label="Grass"></option>
          <option value="Fairy" label="Fairy"></option>
          <option value="Fire" label="Fire"></option>
          <option value="Melee" label="Melee"></option>
          <option value="Dark" label="Dark"></option>
          <option value="Dragon" label="Dragon"></option>
          <option value="None" label="None"></option>
          <option value="Electric" label="Electric"></option>
          <option value="Bug" label="Bug"></option>
        </select>
      </div>

    </div>
  );
}
