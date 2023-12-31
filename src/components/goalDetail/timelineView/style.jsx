import styled from "styled-components";

export const s = {
  TimelineWrapper: styled.div`
    display: flex;
    height: 100%;
    width: 100%;
    flex-direction: column;
    align-items: flex-start;
    flex: 1 0 0;
    align-self: stretch;
    overflow: auto;
  `,
  GoalCommentsWrapper: styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    align-items: flex-start;
    padding: 1rem;
    gap: 1rem;
  `,
  GoalComment: styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    flex: 1 0 0;
    gap: 0.5rem;
    padding-left: 1.25rem;
    border-left: 0.2rem solid ${({ $color }) => $color};
  `,
  GoalCommentDate: styled.span`
    color: ${p => p.theme.colors.gray2};
    font-size: 0.625rem;
    font-weight: 400;
  `,
  GoalCommentContent: styled.span`
    color: ${p => p.theme.colors.gray4};
    font-size: 0.75rem;
    font-weight: 400;
  `,
  GoalCommentFeelingWrapper: styled.div`
    display: flex;
    align-items: flex-start;
    gap: 0.3125rem;
  `,
  TodoWrapper: styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    align-self: stretch;
  `,
  TodoBox: styled.div`
    display: flex;
    padding: 1.25rem;
    align-items: flex-start;
    gap: 0.625rem;
    align-self: stretch;
    border: 2px solid ${({ $color }) => $color};
    border-radius: 0.625rem;
  `,
  ChkBox: styled.div`
    display: inline-block;f
    width: 1.25rem;
    height: 1.25rem;
    padding: 0.3125rem 0.625rem;
    background: ${p => p.theme.colors.gray0};
    border-radius: 0.3125rem;
    position: relative;
  `,
  ChkBoxLabel: styled.span`
    display: inline-block;
    font-size: 1rem;
    width: 1.25rem;
    height: 1.25rem;
    border-radius: 0.3125rem;
    position: absolute;
    text-align: center;
    top: 15%;
    left: 0;
    color: ${({ $color }) => $color};
  `,
  TodoBoxContentWrapper: styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 0.3125rem;
    flex: 1 0 0;
  `,
  TodoTitle: styled.span`
    color: ${p => p.theme.colors.gray3};
    font-size: 0.75rem;
    font-weight: 400;
  `,
  TodoContent: styled.span`
    height: 1.25rem;
    overflow: hidden;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.25rem;
  `,
  TodoCommentsWrapper: styled.div`
    display: flex;
    padding: 0.625rem 0.625rem 0.625rem 3.125rem;
    flex-direction: column;
    align-items: flex-start;
    gap: 0.625rem;
    align-self: stretch;
  `,
  TodoComment: styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 0.625rem;
    align-self: stretch;
    padding-left: 1.25rem;
    border-left: 0.2rem solid ${({ $color }) => $color};
  `,
  TodoCommentContent: styled.span`
    color: ${p => p.theme.colors.gray4};
    font-size: 0.75rem;
    font-weight: 400;
  `,
  TodoCommentFeelingWrapper: styled.div`
    display: flex;
    align-items: flex-start;
    gap: 0.3125rem;
  `
};
