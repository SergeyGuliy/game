import React, {useCallback, useEffect, useMemo, useState} from "react";
import Field from "../field";
import { useDispatch, useSelector } from "react-redux";
import { actions } from "../../redux/game";

const throttle = (func, limit) => {
  let inThrottle;
  return function() {
    const args = arguments;
    const context = this;
    if (!inThrottle) {
      func.apply(context, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  }
}

const Fields = () => {
  const fields = useSelector((state) => state.game.fields);
  const checked = useSelector((state) => state.game.checked);
  const explode = useSelector((state) => state.game.explode);
  const mathRow = useSelector((state) => state.game.matchRow);
  const mathCol = useSelector((state) => state.game.matchCol);
  const defaultShuffle = useSelector((state) => state.game.defaultShuffle);
  const checkShuffle = useSelector((state) => state.game.checkShuffle);
  const checkAddsItems = useSelector((state) => state.game.checkAddsItems);

  const dispatch = useDispatch();

  const flatFields = useMemo(() => {
    return fields?.flat(+Infinity)
  }, [fields])

  React.useEffect(() => {
    if (checkShuffle) {
      dispatch(actions.checkDefaultShuffle());
    }
    if (defaultShuffle) {
      dispatch(actions.shuffle());
    }
  });

  React.useEffect(() => {
    // if (explode) dispatch(actions.deleteFields());
    // if (explode) dispatch(actions.shiftFields());
    // if (explode) dispatch(actions.addNewFields());
    if (explode) {
      dispatch(actions.deleteFields());
      dispatch(actions.shiftFields());
      dispatch(actions.addNewFields());
    }
  });

  React.useEffect(() => {
    if (checked) dispatch(actions.checkHorizontal());
    if (checked) dispatch(actions.checkVertical());
  });

  React.useEffect(() => {
    dispatch(actions.explodeHorizontal());
  }, [mathRow]);

  React.useEffect(() => {
    dispatch(actions.explodeVertical());
  }, [mathCol]);

  React.useEffect(() => {
    if (checkAddsItems) dispatch(actions.checkNewItems());
  });

  const checkSwap = useSelector((state) => state.game.checkSwap);
  const startSwap = useSelector((state) => state.game.startSwap);

  React.useEffect(() => {
    if (checkSwap) {
      dispatch(actions.checkSwap());
    }
  }, [checkSwap]);

  React.useEffect(() => {
    if (startSwap) dispatch(actions.swapItems());
  }, [startSwap]);


  // swipe functionality
  const [firstTouchedField, setFirstTouchedField] = useState(null)
  const [initPos, setInitPos] = useState(null)
  const [touchStartDate, setTouchStartDate] = useState(null)
  const onTouchStart = (e, field) => {
    const
      eX = e.clientX ?? e.changedTouches?.[0]?.clientX ?? e.touches?.[0]?.clientX,
      eY = e.clientY ?? e.changedTouches?.[0]?.clientY ?? e.touches?.[0]?.clientY
    setFirstTouchedField(field)
    setInitPos([eX, eY])
    setTouchStartDate(Date.now())
    if (e._reactName !== 'onTouchStart')
      e.preventDefault()
  }

  const onTouchEnd = (e, field) => {
    if (Date.now() - touchStartDate <= 150) {
      console.log(field)
      clickField(field.col, field.pos, activeFileds)
      setFirstTouchedField(null)
      return;
    }

    const
      eX = e.clientX ?? e.changedTouches?.[0]?.clientX ?? e.touches?.[0]?.clientX,
      eY = e.clientY ?? e.changedTouches?.[0]?.clientY ?? e.touches?.[0]?.clientY

    const directionValues = {
      [initPos[1] - eY]: 'top',
      [eX - initPos[0]]: 'right',
      [eY - initPos[1]]: 'bottom',
      [initPos[0] - eX]: 'left'
    }

    const maxValue = Math.max(...Object.keys(directionValues)),
      direction = directionValues[maxValue]

    if (maxValue > 20) {
      const toCol = direction === 'top' ? firstTouchedField.col - 1 : (direction === 'bottom' ? firstTouchedField.col + 1 : firstTouchedField.col),
        toRow = direction === 'left' ? firstTouchedField.pos - 1 : (direction === 'right' ? firstTouchedField.pos + 1 : firstTouchedField.pos)
      console.log([firstTouchedField.col, firstTouchedField.pos], [toCol, toRow])
      dispatch(actions.selectFirstItem({col: firstTouchedField.col, pos: firstTouchedField.pos}))
      dispatch(actions.selectSecondItem({col: toCol, pos: toRow}))
    }
    setFirstTouchedField(null)
  }

  const activeFileds = useSelector((state) => state.game.selectFields);

  const clickField = (col, pos) => {
    if (activeFileds.first === null) {
      dispatch(actions.selectItem({ col, pos }));
      dispatch(actions.selectFirstItem({ col, pos }));
      return;
    }
    if (activeFileds.second === null) {
      dispatch(actions.selectItem({ col, pos }));
      dispatch(actions.selectSecondItem({ col, pos }));
    }
  };

  return (
    <>
      {flatFields.map((field) => {
        return (
          <Field
            key={field.id}
            id={field.id}
            img={field.img}
            select={field.select}
            isEmpty={field.isEmpty}

            onTouchStart={e => onTouchStart(e, field)}
            onTouchEnd={(e) => onTouchEnd(e, field)}
          />
        );
      })}
    </>
  );
};

export default Fields;
