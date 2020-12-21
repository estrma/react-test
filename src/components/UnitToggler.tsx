import React, {ReactElement} from "react";

interface UnitTogglerProps {
    units: TempUnit[];
    unitSelected: TempUnit;
    onSelect: (unit: TempUnit) => void
}

const UnitToggler = ({units, unitSelected, onSelect}: UnitTogglerProps): ReactElement => (
    <div className="unit-toggler">
        {
            units.map(unit => (
                <label key={unit}>
                    <input
                        type="radio"
                        name="unit"
                        value={unit}
                        checked={unitSelected === unit}
                        onChange={() => onSelect(unit)}
                    />
                    °{unit}
                </label>
            ))
        }
    </div>
);

export default UnitToggler;
